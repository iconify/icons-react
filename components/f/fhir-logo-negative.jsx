import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6zxgccaz.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jceynbc9n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="healthiconsFhirLogoNegative0" class="d6zxgccaz"/></defs><g class="ft5dv1b6b"><g clip-path="url(#healthiconsFhirLogoNegative1)"><g clip-path="url(#healthiconsFhirLogoNegative2)"><path clip-rule="evenodd" class="jceynbc9n"/></g></g><defs><clipPath id="healthiconsFhirLogoNegative1"><use href="#healthiconsFhirLogoNegative0"/></clipPath><clipPath id="healthiconsFhirLogoNegative2"><use href="#healthiconsFhirLogoNegative0"/></clipPath></defs></g>`,
		"fallback": "healthicons:fhir-logo-negative",
	});
}

export default Component;
