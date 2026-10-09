import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty1v2kbgc.css';
import '../../css/p/p1evydb5d.css';
import '../../css/t/t40ahpbrj.css';
import '../../css/g/gh94m7zjr.css';
import '../../css/a/adji7ccar.css';
import '../../css/y/yyuh1v55c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty1v2kbgc"/><path class="p1evydb5d"/><path class="t40ahpbrj"/><path class="gh94m7zjr"/><path class="adji7ccar"/><path class="yyuh1v55c"/>`,
		"fallback": "energy-icons:heatmap-48",
	});
}

export default Component;
