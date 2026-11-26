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
		"content": `<style>.b6xgt7vwa {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3.3849 11.8915L2.0248 3.3132C1.8324 2.0988 2.7707 1 4.0002 1L19.9998 1C21.2292 1 22.1677 2.0988 21.9751 3.3132L19.2551 20.4698C19.0241 21.9271 17.7676 23 16.2921 23L7.7079 23C6.2324 23 4.9759 21.9271 4.7449 20.4698Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.t2idczbrx {
  d: path("M20.3104 13.8132L21.3658 7.1566C21.374 7.1048 21.3781 7.0524 21.3781 7C21.3781 6.4477 20.9304 6 20.3781 6C20.245 6 20.1132 6.0266 19.9905 6.0782C17.8662 6.9714 14.6392 6.9787 12.3714 6.0715C9.6392 4.9787 5.8662 4.9714 3.2343 6.0782C2.8632 6.2342 2.6219 6.5975 2.6219 7C2.6219 7.0524 2.626 7.1048 2.6342 7.1566L4.7449 20.4698C4.9759 21.9271 6.2324 23 7.7079 23L16.2921 23C17.7676 23 19.0241 21.9271 19.2551 20.4698Z");
}
</style><g class="cuyn6tgcc"><path class="b6xgt7vwa"/><path class="t2idczbrx"/></g>`,
		"fallback": "keyline-icons:glass-water-duotone",
	});
}

export default Component;
