import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/v/v0dofs9fn.css';
import '../../css/h/hpluv7gvx.css';
import '../../css/w/wvkle8b0a.css';
import '../../css/i/i1qkqjmcg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGGBoFQb9z"><g class="s9cl3zbei"><path class="v0dofs9fn"/><path class="hpluv7gvx"/><path class="wvkle8b0a"/><path class="i1qkqjmcg"/></g></mask></defs><path mask="url(#SVGGBoFQb9z)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:general-branch",
	});
}

export default Component;
