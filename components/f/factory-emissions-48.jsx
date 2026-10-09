import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g20323bqu.css';
import '../../css/j/jcg7b95lb.css';
import '../../css/y/y-8q6156p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g20323bqu"/><path class="jcg7b95lb"/><path class="y-8q6156p"/>`,
		"fallback": "energy-icons:factory-emissions-48",
	});
}

export default Component;
