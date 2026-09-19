import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/x/x16illbqh.css';
import '../../css/e/egt6m3bbv.css';
import '../../css/b/bq41sjbfa.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGfkXvWiBU"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="x16illbqh"/><path class="egt6m3bbv"/><path class="bq41sjbfa"/></g></mask></defs><path mask="url(#SVGfkXvWiBU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:expand-right",
	});
}

export default Component;
