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
		"content": `<style>.imsfdmbmj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.507 30.723L24 24l10.46 6.655");
}

.ryr7xt5_p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.898 43.5c-.586-.003-16.564-9.33-16.854-9.838c-.29-.509-.193-18.995.102-19.5c.296-.506 16.37-9.665 16.956-9.662s16.564 9.33 16.854 9.838c.29.509.193 18.995-.102 19.5c-.296.505-16.37 9.665-16.956 9.662M24 12.23V24");
}
</style><path class="ryr7xt5_p"/><path class="imsfdmbmj"/>`,
		"fallback": "arcticons:g19-game-booster",
	});
}

export default Component;
