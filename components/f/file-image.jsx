import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rix0hrcrg.css';
import '../../css/z/ztrntccql.css';
import '../../css/e/ejq36vvzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rix0hrcrg wm-k"/><path class="wm-a ztrntccql"/><path class="ejq36vvzq wm-k"/>`,
		"fallback": "withicons-bauhaus:file-image",
	});
}

export default Component;
