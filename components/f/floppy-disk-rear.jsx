import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r0_tkgy3d.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/a/aytpqbcgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r0_tkgy3d"/><circle class="h_tsn8bxt"/><path class="aytpqbcgj"/></g>`,
		"fallback": "lucide-lab:floppy-disk-rear",
	});
}

export default Component;
