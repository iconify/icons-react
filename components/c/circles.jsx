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
		"content": `<style>.akq9rggwp {
  cx: 35.303px;
  cy: 31.345px;
  r: 8.613px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.g60n16bal {
  cx: 12.697px;
  cy: 24px;
  r: 8.613px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hjrref-js {
  cx: 21.331px;
  cy: 12.115px;
  r: 8.613px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.jmmb2pbah {
  cx: 35.303px;
  cy: 16.655px;
  r: 8.613px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.mk0jb2bxt {
  cx: 21.331px;
  cy: 35.885px;
  r: 8.613px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.y44di6smb {
  cx: 25.193px;
  cy: 24px;
  r: 10.574px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="y44di6smb"/><circle class="hjrref-js"/><circle class="jmmb2pbah"/><circle class="akq9rggwp"/><circle class="mk0jb2bxt"/><circle class="g60n16bal"/>`,
		"fallback": "arcticons:circles",
	});
}

export default Component;
