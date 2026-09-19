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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.csnt7cbse {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30.669 17.814l-4.086 12.373l-4.087-12.373");
}

.fna6bi3ky {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.289 32.25a16.5 16.5 0 1 1 0-16.5m-20.958 2.064v12.372");
}
</style><circle class="cpk0fnbgt"/><path class="fna6bi3ky"/><path class="csnt7cbse"/>`,
		"fallback": "arcticons:calcy-iv",
	});
}

export default Component;
