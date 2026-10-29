import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suep8hb6m.css';
import '../../css/a/a04554amq.css';
import '../../css/t/txfp76hvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="suep8hb6m wm-a"/><path class="a04554amq wm-k"/><path class="txfp76hvp wm-k"/>`,
		"fallback": "withicons-bauhaus:bath",
	});
}

export default Component;
