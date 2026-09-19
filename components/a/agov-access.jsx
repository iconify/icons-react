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
		"content": `<style>.jlwpq9b7z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.548 21.677h16.905v16.905H15.548z");
}

.p80v5oq6g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.452 31.305h-4.039v3.238h-8.826v-8.826h8.826v1.558m-13.794-9.516V14.88a9.381 9.381 0 1 1 18.762 0v2.878");
}

.pya9wpb4j {
  width: 31.458px;
  height: 24.741px;
  x: 8.271px;
  y: 17.759px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.129px;
  ry: 4.129px;
}
</style><rect class="pya9wpb4j"/><path class="jlwpq9b7z"/><path class="p80v5oq6g"/>`,
		"fallback": "arcticons:agov-access",
	});
}

export default Component;
