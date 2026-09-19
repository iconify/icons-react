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
		"content": `<style>.xlh6bfj6w {
  width: 26.419px;
  height: 39px;
  x: 10.79px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.553px;
}

.xsfjkbbel {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m37.2 41.12l-14.06-4.178a2.52 2.52 0 0 1-1.8-2.412V13.47a2.52 2.52 0 0 1 1.8-2.412L37.2 6.88M24.621 25.954v-3.908");
}
</style><rect class="xlh6bfj6w"/><path class="xsfjkbbel"/>`,
		"fallback": "arcticons:checkudvej",
	});
}

export default Component;
