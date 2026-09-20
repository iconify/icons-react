import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/z/zm9dbfsnf.css';
import '../../css/a/acpi4-bga.css';
import '../../css/b/b23ukybps.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGmI9kXcFz"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="zm9dbfsnf"/><path class="acpi4-bga"/><path class="b23ukybps"/></g></mask></defs><circle mask="url(#SVGmI9kXcFz)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:code-circle-filled",
	});
}

export default Component;
