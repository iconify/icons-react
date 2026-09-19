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
		"content": `<style>.bashv5bhl {
  fill: var(--svg-color--c94747, #c94747);
  d: path("M24 17c8.3 0 15 6.7 15 15H9c0-8.3 6.7-15 15-15");
}

.medg0efng {
  fill: var(--svg-color--c94747, #c94747);
  d: path("M32 62c16.6 0 30-13.4 30-30H2c0 16.6 13.4 30 30 30");
}

.o9gi4acwv {
  fill: var(--svg-color--f9f9f9, #f9f9f9);
  d: path("M24 47c-8.3 0-15-6.7-15-15h30c0 8.3-6.7 15-15 15");
}

.yigxjyqmv {
  fill: var(--svg-color--f9f9f9, #f9f9f9);
  d: path("M32 2C15.4 2 2 15.4 2 32h60C62 15.4 48.6 2 32 2");
}
</style><path class="medg0efng"/><path class="yigxjyqmv"/><path class="bashv5bhl"/><path class="o9gi4acwv"/>`,
		"fallback": "emojione:flag-for-flag-greenland",
	});
}

export default Component;
