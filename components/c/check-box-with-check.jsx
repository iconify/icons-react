import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ja87v8bhx {
  fill: var(--svg-color--83bf4f, #83bf4f);
  d: path("M58.4 0L23.6 38.3l-10.1-7.7H7.9l15.7 25.5L64 0z");
}

.y1rceofnk {
  fill: var(--svg-color--3e4347, #3e4347);
  d: path("M53.9 56.1c0 .6-.5 1.1-1.1 1.1H7.9c-.6 0-1.1-.5-1.1-1.1V11.2c0-.6.5-1.1 1.1-1.1h30.7l6.1-6.7H2.2C1 3.4 0 4.4 0 5.6v56.1C0 63 1 64 2.2 64h56.1c1.2 0 2.2-1 2.2-2.2V18.1l-6.7 9.4c.1 0 .1 28.6.1 28.6");
}
</style><path class="ja87v8bhx"/><path class="y1rceofnk"/>`,
		"fallback": "emojione:check-box-with-check",
	});
}

export default Component;
