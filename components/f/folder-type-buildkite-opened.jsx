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

.mnwf1zbdm {
  fill: var(--svg-color--7bdbb6, #7bdbb6);
  d: path("M27.4 5.5h-9.2l-2.1 4.2H4.3v4H.5l3.8 12.8h25.2v-21Zm-7.2 2.1h7.1v2.1h-8.1Zm5.5 6.1H6.6v-1.9h20.8v7.626Z");
}

.w_md5qbvy {
  fill: var(--svg-color--30f2a2, #30f2a2);
  d: path("m7 15l8 3.92v8L7 23Zm16.08 0L31 18.92L23.08 23Z");
}
</style><path class="mnwf1zbdm"/><path class="w_md5qbvy"/><path class="awtt9sbwi"/>`,
		"fallback": "vscode-icons:folder-type-buildkite-opened",
	});
}

export default Component;
