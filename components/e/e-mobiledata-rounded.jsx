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
		"content": `<style>.tf6vydh7f {
  fill: currentColor;
  d: path("M9 17q-.425 0-.712-.288T8 16V8q0-.425.288-.712T9 7h6q.425 0 .713.288T16 8t-.288.713T15 9h-5v2h5q.425 0 .713.288T16 12t-.288.713T15 13h-5v2h5q.425 0 .713.288T16 16t-.288.713T15 17z");
}
</style><path class="tf6vydh7f"/>`,
		"fallback": "material-symbols:e-mobiledata-rounded",
	});
}

export default Component;
