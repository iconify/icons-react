import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32,"left":31.88};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.em-by2bzh {
  d: path("M52.87 7.65L43.03 2v3.94l6.68 3.9v11.83l3.16 1.8c1.95 1.12 3.56.5 3.56-1.5v-8.72c-.05-1.95-1.66-4.48-3.56-5.6");
}

.gj4-gk-fq {
  fill-rule: evenodd;
  d: path("m39.33 5.4l9.06 5.27V30l-9.06-5.26z");
}

.zlh-loubj {
  fill: var(--svg-color--02a8ef, #02a8ef);
}
</style><g class="zlh-loubj"><path class="gj4-gk-fq"/><path class="em-by2bzh"/></g>`,
		"fallback": "vscode-icons:file-type-packer",
	});
}

export default Component;
