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
		"content": `<style>.b9s3zgkdp {
  fill: var(--svg-color--fff, #fff);
  d: path("M30 4.33v23.34H2V4.33z");
}

.njpga5bnu {
  fill: var(--svg-color--167abf, #167abf);
  d: path("M2 4.33h8.17v23.34H2zm28 0v23.34H12.5V4.33zM14.83 8.71h9.34V6.96h-9.34zm9.34 14.58h-9.34v1.75h9.34zm3.5-4.08h-9.34v1.75h9.34zm0-4.09h-9.34v1.75h9.34zm0-4.08h-9.34v1.75h9.34z");
}
</style><path class="b9s3zgkdp"/><path class="njpga5bnu"/>`,
		"fallback": "vscode-icons:file-type-language-configuration",
	});
}

export default Component;
