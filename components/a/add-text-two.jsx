import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/mzszod_2j.css';
import '../../css/d/d21eg8_0m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIkitMbSJ"><g class="s9cl3zbei"><circle class="mzszod_2j"/><path class="d21eg8_0m"/></g></mask></defs><path mask="url(#SVGIkitMbSJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:add-text-two",
	});
}

export default Component;
