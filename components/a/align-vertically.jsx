import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/m/mdt6xvbry.css';
import '../../css/v/v1s64tbtd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><rect class="mdt6xvbry"/><path class="v1s64tbtd"/></g>`,
		"fallback": "icon-park:align-vertically",
	});
}

export default Component;
