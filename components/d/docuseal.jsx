import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ej0w98jpu.css';
import '../../css/m/mi3skhlne.css';
import '../../css/t/tcg1rxmwr.css';

const viewBox = {"width":180,"height":180};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ej0w98jpu"/><path class="mi3skhlne"/><circle class="tcg1rxmwr"/>`,
		"fallback": "thesvg-color:docuseal",
	});
}

export default Component;
