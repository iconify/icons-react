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
		"content": `<style>.auetxcbvm {
  fill: var(--svg-color--b533a5, #b533a5);
  d: path("M24.907 23.9V13a4.03 4.03 0 0 0 5.557 0v10.9l-.383.365a3.47 3.47 0 0 1-4.791 0Zm1.111-6.455h3.334v-1.111h-3.334Zm1.667 11.114a4.57 4.57 0 0 1-2.778-.966v2.077a4.03 4.03 0 0 0 5.557 0v-2.077a4.57 4.57 0 0 1-2.779.966");
}

.fq1-uub1u {
  fill: var(--svg-color--b533a5, #b533a5);
  d: path("m30.081 26.488l.383-.365v-.753a4.48 4.48 0 0 1-5.557 0v.753l.383.365a3.47 3.47 0 0 0 4.791 0");
}

.plx0j6b8z {
  fill: var(--svg-color--8abf4f, #8abf4f);
  d: path("M18.794 23.9V13a4.03 4.03 0 0 0 5.557 0v10.9l-.383.365a3.47 3.47 0 0 1-4.791 0Zm1.111-6.455h3.335v-1.111h-3.334Zm1.668 11.114a4.57 4.57 0 0 1-2.778-.966v2.077a4.03 4.03 0 0 0 5.557 0v-2.077a4.57 4.57 0 0 1-2.779.966");
}

.ptlrb068f {
  fill: var(--svg-color--59c2f2, #59c2f2);
  d: path("m13.065 26.488l-.383-.365v-.753a4.48 4.48 0 0 0 5.557 0v.753l-.383.365a3.47 3.47 0 0 1-4.791 0");
}

.rp3b1qbwi {
  fill: var(--svg-color--59c2f2, #59c2f2);
  d: path("M12.682 23.9V13a4.03 4.03 0 0 0 5.557 0v10.9l-.383.365a3.47 3.47 0 0 1-4.791 0Zm1.111-6.455h3.334v-1.111h-3.334Zm1.667 11.114a4.57 4.57 0 0 1-2.778-.966v2.077a4.03 4.03 0 0 0 5.557 0v-2.077a4.57 4.57 0 0 1-2.779.966");
}

.v4sp4y5rr {
  fill: var(--svg-color--8abf4f, #8abf4f);
  d: path("m23.968 26.488l.383-.365v-.753a4.48 4.48 0 0 1-5.557 0v.753l.383.365a3.47 3.47 0 0 0 4.791 0");
}

.w-mb44b9g {
  fill: var(--svg-color--c18053, #c18053);
  d: path("M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z");
}
</style><path class="w-mb44b9g"/><path class="ptlrb068f"/><path class="rp3b1qbwi"/><path class="v4sp4y5rr"/><path class="plx0j6b8z"/><path class="fq1-uub1u"/><path class="auetxcbvm"/>`,
		"fallback": "vscode-icons:folder-type-library",
	});
}

export default Component;
