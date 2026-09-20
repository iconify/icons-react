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
		"content": `<style>.magsmcb5p {
  fill: currentColor;
  d: path("M20.288 16.213Q20 15.925 20 15.5t.288-.712T21 14.5t.713.288t.287.712t-.288.713T21 16.5t-.712-.288M20 13V7h2v6zM1 18V6h17v2H3v8h15q0 .575.213 1.088t.562.912zm2-2V8z");
}
</style><path class="magsmcb5p"/>`,
		"fallback": "material-symbols:battery-android-alert-outline-sharp",
	});
}

export default Component;
