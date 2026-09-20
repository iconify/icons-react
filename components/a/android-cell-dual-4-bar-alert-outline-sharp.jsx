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
		"content": `<style>.oxh9e7b5n {
  fill: currentColor;
  d: path("M1.5 14V9.5h3V14zm6 0V8h3v6zm6 0V6h3v8zm-12 6v-4h3v4zm6 0v-4h3v4zm6 0v-4h3v4zm6-7.825V4h3v7.85q-.25-.05-.488-.075t-.512-.025q-.525 0-1.037.113t-.963.312m1.288 7.538Q20.5 19.425 20.5 19t.288-.712T21.5 18t.713.288t.287.712t-.288.713T21.5 20t-.712-.288M20.5 17v-3.5h2V17z");
}
</style><path class="oxh9e7b5n"/>`,
		"fallback": "material-symbols:android-cell-dual-4-bar-alert-outline-sharp",
	});
}

export default Component;
