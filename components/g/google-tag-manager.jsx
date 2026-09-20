import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.eco_o5bqm {
  fill: var(--svg-color--8ab4f8, #8ab4f8);
  d: path("m246.625 105.37l-96-96c-12.494-12.494-32.756-12.494-45.25 0s-12.495 32.757 0 45.252l96 96c12.494 12.494 32.756 12.494 45.25 0s12.495-32.757 0-45.251");
}

.qj1atcbnp {
  cx: 127.265px;
  cy: 224.731px;
  r: 31.273px;
  fill: var(--svg-color--246fdb, #246fdb);
}

.smzzc3gep {
  fill: var(--svg-color--4285f4, #4285f4);
  d: path("M150.45 53.938L106.176 8.731L9.36 104.629c-12.48 12.48-12.48 32.713 0 45.207l95.36 95.986l45.09-42.182l-72.654-76.407z");
}

.zg6wy8b6o {
  fill: var(--svg-color--8ab4f8, #8ab4f8);
  d: path("m150.262 245.516l-44.437-43.331l95.433-97.454l46.007 45.091z");
}
</style><path class="zg6wy8b6o"/><path class="smzzc3gep"/><path class="eco_o5bqm"/><circle class="qj1atcbnp"/>`,
		"fallback": "logos:google-tag-manager",
	});
}

export default Component;
