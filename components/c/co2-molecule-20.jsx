import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x64tqdbkh.css';
import '../../css/g/gr4zytbch.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x64tqdbkh"/><path class="gr4zytbch"/>`,
		"fallback": "energy-icons:co2-molecule-20",
	});
}

export default Component;
