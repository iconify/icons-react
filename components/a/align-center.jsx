import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt7-xmbvc.css';
import '../../css/m/m537j_bzb.css';
import '../../css/j/jh-_kon1i.css';
import '../../css/a/a235f6qsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer rt7-xmbvc"/><path class="duoicon-primary-layer m537j_bzb"/><path class="duoicon-secondary-layer jh-_kon1i"/><path class="a235f6qsq duoicon-primary-layer"/>`,
		"fallback": "duo-icons:align-center",
	});
}

export default Component;
