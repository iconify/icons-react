import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.te7w0ccll {
  fill: currentColor;
  d: path("M3.133 9.16a.5.5 0 1 0 .738.675l5.631-6.168v13.831a.5.5 0 1 0 1 0V3.67l5.628 6.165a.5.5 0 0 0 .739-.674l-6.314-6.916a.75.75 0 0 0-.632-.24a.75.75 0 0 0-.476.24z");
}
</style><path class="te7w0ccll"/>`,
		"fallback": "fluent:arrow-up-20-regular",
	});
}

export default Component;
