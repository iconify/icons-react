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
		"content": `<style>.k705skbpy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.425 24l-.017 19.5l10.416-9.779L11.5 13.788m13.704 7.614l7.62-7.123L22.408 4.5v14.29M11.5 34.212L22.425 24m10.399 9.721l3.676 3.433M22.408 18.79l2.796 2.612");
}
</style><path class="k705skbpy"/>`,
		"fallback": "arcticons:greentooth",
	});
}

export default Component;
