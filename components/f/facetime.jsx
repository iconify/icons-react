import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/m2blynbna.css';
import '../../css/o/ot_tbvbcc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGjQPqWdiy"><g class="s9cl3zbei"><path class="m2blynbna"/><path class="ot_tbvbcc"/></g></mask></defs><path mask="url(#SVGjQPqWdiy)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:facetime",
	});
}

export default Component;
