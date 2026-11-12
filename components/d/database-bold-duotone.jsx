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
		"content": `<style>.ios08bb7p {
  fill: currentColor;
  d: path("M12 2C16.4183 2 20 3.79086 20 6C20 8.20914 16.4183 10 12 10C7.58172 10 4 8.20914 4 6C4 3.79086 7.58172 2 12 2Z");
}

.qj705hhir {
  fill: currentColor;
  d: path("M20 18C20 20.2091 16.4183 22 12 22C7.58172 22 4 20.2091 4 18V6C4 8.20914 7.58172 10 12 10C16.4183 10 20 8.20914 20 6V18Z");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.xi4-07bfd {
  fill: currentColor;
  d: path("M20 12C20 14.2091 16.4183 16 12 16C7.58172 16 4 14.2091 4 12V6C4 8.20914 7.58172 10 12 10C16.4183 10 20 8.20914 20 6V12Z");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><path class="qj705hhir"/><path class="ios08bb7p"/><path class="xi4-07bfd"/>`,
		"fallback": "solar:database-bold-duotone",
	});
}

export default Component;
