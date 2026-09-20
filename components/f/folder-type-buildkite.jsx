import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.awtt9sbwi {
  fill: var(--svg-color--14cc80, #14cc80);
  d: path("M23.08 15L15 18.92v8L23.08 23ZM31 18.92L23.08 23v8L31 26.92Z");
}

.m7_rh8bwd {
  fill: var(--svg-color--55bf91, #55bf91);
  d: path("M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z");
}

.w_md5qbvy {
  fill: var(--svg-color--30f2a2, #30f2a2);
  d: path("m7 15l8 3.92v8L7 23Zm16.08 0L31 18.92L23.08 23Z");
}
</style><path class="m7_rh8bwd"/><path class="w_md5qbvy"/><path class="awtt9sbwi"/>`,
		"fallback": "vscode-icons:folder-type-buildkite",
	});
}

export default Component;
