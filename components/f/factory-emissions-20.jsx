import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emlsrnxct.css';
import '../../css/w/w80nymbio.css';
import '../../css/i/io7sfnrdz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emlsrnxct"/><path class="w80nymbio"/><path class="io7sfnrdz"/>`,
		"fallback": "energy-icons:factory-emissions-20",
	});
}

export default Component;
