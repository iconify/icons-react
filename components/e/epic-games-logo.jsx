import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/p/ppv90kgvs.css';
import '../../css/o/oni7jve8a.css';
import '../../css/e/ebnox-sdk.css';
import '../../css/c/cahtx5bpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="ppv90kgvs"/><path class="oni7jve8a"/><path class="ebnox-sdk"/><path class="cahtx5bpi"/></g>`,
		"fallback": "streamline-logos:epic-games-logo",
	});
}

export default Component;
