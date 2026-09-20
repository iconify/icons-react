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
		"content": `<style>.a9429mbjd {
  fill: var(--svg-color--a1e0ff, #a1e0ff);
  d: path("M30 13.992L2 8.721V2l28 5.271Zm0 10.579L2 19.3v-6.72l28 5.27Z");
}

.rn7je3bil {
  fill: var(--svg-color--295892, #295892);
  d: path("M30 17.832L2 23.28V30l28-5.447Zm0-10.579L2 12.7v6.72l28-5.447Z");
}
</style><path class="rn7je3bil"/><path class="a9429mbjd"/>`,
		"fallback": "vscode-icons:file-type-san",
	});
}

export default Component;
