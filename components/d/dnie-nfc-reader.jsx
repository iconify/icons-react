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
		"content": `<style>.h6zsdlhzz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.767 21.313v10.956m-4.977 0v-6.822c0-2.283-1.812-4.134-4.046-4.134s-4.047 1.85-4.047 4.134m.001 6.822V21.313m-4.573 4.134c0-2.283-1.812-4.134-4.046-4.134s-4.047 1.85-4.047 4.134v2.687c0 2.284 1.812 4.135 4.047 4.135s4.046-1.851 4.046-4.135m0 4.135V15.731");
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.py58-obic {
  cx: 36.767px;
  cy: 16.248px;
  r: 0.75px;
  fill: currentColor;
}
</style><rect class="j3s9ivbxi"/><circle class="py58-obic"/><path class="h6zsdlhzz"/>`,
		"fallback": "arcticons:dnie-nfc-reader",
	});
}

export default Component;
