import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.esobqj6rk {
  fill: currentColor;
  d: path("M11.329 19.159q-.323-.14-.566-.432L3.267 9.731q-.186-.217-.28-.475t-.093-.55q0-.187.047-.366q.048-.18.134-.361l1.779-3.59q.217-.405.603-.647t.845-.242h11.396q.46 0 .845.242t.603.646l1.779 3.59q.087.182.134.362t.047.366q0 .292-.094.55t-.28.475l-7.495 8.996q-.243.292-.566.432q-.323.139-.671.139t-.671-.14M8.817 8.5h6.366l-2-4h-2.366zm2.683 9.56V9.5H4.392zm1 0l7.108-8.56H12.5zm3.792-9.56h3.766L18.23 4.846q-.077-.154-.231-.25t-.327-.096h-3.38zm-12.35 0h3.766l2-4H6.327q-.173 0-.327.096t-.23.25z");
}
</style><path class="esobqj6rk"/>`,
		"fallback": "material-symbols-light:diamond-outline-rounded",
	});
}

export default Component;
