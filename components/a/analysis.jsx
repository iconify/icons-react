import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/n/nyc9q5jiz.css';
import '../../css/m/m_awi4b7p.css';
import '../../css/c/cyc_zi05z.css';
import '../../css/d/dimzdedth.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGGSuIweNy"><g class="s9cl3zbei"><path class="nyc9q5jiz"/><path class="m_awi4b7p"/><path class="cyc_zi05z"/><path class="dimzdedth"/></g></mask></defs><path mask="url(#SVGGSuIweNy)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:analysis",
	});
}

export default Component;
