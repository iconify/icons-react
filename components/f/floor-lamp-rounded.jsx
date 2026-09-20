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
		"content": `<style>.q5qor6bte {
  fill: currentColor;
  d: path("M11.663 18.856q-.144-.144-.144-.356V11H7.116q-.413 0-.66-.333t-.118-.717l1.508-4.82q.162-.504.586-.817T9.38 4h5.277q.525 0 .949.313t.585.818L17.7 9.95q.13.385-.117.717t-.66.333h-4.404v7.5q0 .213-.144.356T12.02 19t-.356-.144M9.019 21q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.143h6q.213 0 .356.144t.144.357t-.144.356t-.356.143z");
}
</style><path class="q5qor6bte"/>`,
		"fallback": "material-symbols-light:floor-lamp-rounded",
	});
}

export default Component;
