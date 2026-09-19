import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/b/bcqa_q4nr.css';
import '../../css/z/z4-yyfbvs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7VLLbfQH"><g class="ufeehvblu"><path class="bcqa_q4nr"/><path class="z4-yyfbvs"/></g></mask></defs><path mask="url(#SVG7VLLbfQH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:folder-focus",
	});
}

export default Component;
