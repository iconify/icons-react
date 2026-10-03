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
		"content": `<style>.j-h9qpw6u {
  fill: var(--svg-color--005a9c, #005a9c);
  d: path("M12.18 24.82L2 7.18h20.36z");
}

.n2pz2sl-z {
  fill-rule: evenodd;
  stroke-width: var(--svg-stroke-width--0-04px, 0.04px);
}

.o_oq-mb-y {
  fill: var(--svg-color--0093ff, #0093ff);
  d: path("m27.44 7.23l-2.56 4.4H30z");
}

.sw1dvubjj {
  fill: var(--svg-color--0086e8, #0086e8);
  d: path("m27.44 16.02l-2.56-4.4H30z");
}

.xc3zs-q0r {
  fill: var(--svg-color--0066b0, #0066b0);
  d: path("m22.37 7.18l-5.1 8.8h10.2z");
}

.xozr7lm7k {
  fill: var(--svg-color--0076cc, #0076cc);
  d: path("m22.37 24.77l-5.1-8.8h10.2z");
}
</style><g class="n2pz2sl-z"><path class="j-h9qpw6u"/><path class="xc3zs-q0r"/><path class="xozr7lm7k"/><path class="sw1dvubjj"/><path class="o_oq-mb-y"/></g>`,
		"fallback": "vscode-icons:file-type-wgsl",
	});
}

export default Component;
