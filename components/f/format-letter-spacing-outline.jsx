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
		"content": `<style>.ej2zyqpde {
  fill: currentColor;
  d: path("m8 22l-4-4l4-4l1.425 1.4l-1.6 1.6h8.35L14.6 15.4L16 14l4 4l-4 4l-1.425-1.4l1.6-1.6h-8.35L9.4 20.6zM5 12V2h2v10zm6 0V2h2v10zm6 0V2h2v10z");
}
</style><path class="ej2zyqpde"/>`,
		"fallback": "material-symbols:format-letter-spacing-outline",
	});
}

export default Component;
