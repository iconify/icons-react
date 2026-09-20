import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zm9dbfsnf.css';
import '../../css/a/acpi4-bga.css';
import '../../css/b/b23ukybps.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zm9dbfsnf"/><path class="acpi4-bga"/><path class="b23ukybps"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:code-circle",
	});
}

export default Component;
