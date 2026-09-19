import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/b/bcqa_q4nr.css';
import '../../css/m/m5seixx7q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9YoEwexI"><g class="ufeehvblu"><path class="bcqa_q4nr"/><path class="m5seixx7q"/></g></mask></defs><path mask="url(#SVG9YoEwexI)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:folder-success",
	});
}

export default Component;
