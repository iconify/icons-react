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
		"content": `<style>.anxm0sb1k {
  fill: currentColor;
  d: path("M6.34 20.86Q4 20.068 4 18.655q0-.685.625-1.245q.625-.561 1.679-.907l.817.739q-.888.257-1.505.627T5 18.654q0 .765 1.967 1.382t5.033.618t5.033-.617T19 18.654q0-.416-.616-.786q-.617-.37-1.505-.627l.817-.739q1.054.346 1.679.907q.625.56.625 1.245q0 1.413-2.34 2.207t-5.66.793t-5.66-.793M12 18.87L4 11.8V8.852l8-7.433l8 7.433V11.8zm-.061-3.734l6.819-6.064L12 2.793L5.18 9.134zM9.753 9.945q.305-.305.305-.753t-.305-.753T9 8.134t-.753.305t-.305.753t.305.753t.753.305t.753-.305m.843 1.77q.979.39 2.022.194q1.043-.197 1.847-.901q.735-.648.988-1.594t-.08-1.864zm2.157-4.77q.305-.304.305-.753q0-.448-.305-.752q-.305-.305-.753-.305t-.753.305t-.305.752q0 .449.305.753q.305.305.753.305t.753-.305m-.784 2.016");
}
</style><path class="anxm0sb1k"/>`,
		"fallback": "material-symbols-light:ar-stickers-outline-sharp",
	});
}

export default Component;
