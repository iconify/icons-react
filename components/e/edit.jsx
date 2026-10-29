import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m14ig-bxz.css';
import '../../css/q/q52rgmb9a.css';
import '../../css/n/n792s6bgk.css';
import '../../css/e/e0na4obrw.css';
import '../../css/p/p9xa7qdil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m14ig-bxz"/><path class="q52rgmb9a"/><path class="n792s6bgk"/><path class="e0na4obrw"/><path class="p9xa7qdil"/>`,
		"fallback": "withicons-bauhaus:edit",
	});
}

export default Component;
