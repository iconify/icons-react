import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mu952hb5k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.65 35.48v-8h25.12v16H7.23V4.5h8.42v31h16.72");
}

.q6hgm6b0f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.65 16.17H24v11.29h-8.35Zm8.35 0v11.29h8.4V16.17Z");
}

.z2r2whf9c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.37 4.5v23h8.4v-23Z");
}
</style><path class="q6hgm6b0f"/><path class="z2r2whf9c"/><path class="mu952hb5k"/>`,
		"fallback": "arcticons:bandsintown",
	});
}

export default Component;
