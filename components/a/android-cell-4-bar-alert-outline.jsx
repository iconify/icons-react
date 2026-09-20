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
		"content": `<style>.yec8bl3ry {
  fill: currentColor;
  d: path("M1.5 20v-8h3v8zm6 0V9.5h3V20zm6 0V7h3v13zm6-7.825V4h3v7.85q-.25-.05-.488-.075t-.512-.025q-.525 0-1.037.113t-.963.312m1.288 7.538Q20.5 19.425 20.5 19t.288-.712T21.5 18t.713.288t.287.712t-.288.713T21.5 20t-.712-.288M20.5 17v-3.5h2V17z");
}
</style><path class="yec8bl3ry"/>`,
		"fallback": "material-symbols:android-cell-4-bar-alert-outline",
	});
}

export default Component;
