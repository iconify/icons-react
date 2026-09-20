import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k5my48rmk {
  fill: currentColor;
  d: path("M28.293 2.293a1 1 0 1 1 1.414 1.414l-9.34 9.34a7.336 7.336 0 0 1-.66 9.66l-.793.793l-10.39-10.39l.781-.73c2.633-2.62 6.742-2.952 9.647-.746zM6.773 14.187L2.586 16.09a1 1 0 0 0-.293 1.617l12 12a1 1 0 0 0 1.617-.293l1.903-4.187z");
}
</style><path class="k5my48rmk"/>`,
		"fallback": "fluent:broom-32-filled",
	});
}

export default Component;
