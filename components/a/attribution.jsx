import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/t/tejuo1bjd.css';
import '../../css/k/kv1gi7bvd.css';
import '../../css/j/j9ui-sytp.css';
import '../../css/v/vzq57cc3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="tejuo1bjd"/><path class="kv1gi7bvd"/><path class="j9ui-sytp"/><path class="vzq57cc3z"/></g>`,
		"fallback": "streamline-sharp-color:attribution",
	});
}

export default Component;
